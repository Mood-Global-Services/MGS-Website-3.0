// components/UploadResumeField.tsx
import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Chip,
  FormHelperText,
} from "@mui/material";
import theme from "@/theme/theme";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  label?: string;                    // Top label, default "Upload your resume"
  sublabel?: string;                 // Under label, default "PDF, DOCX (max. 3MB)"
  accept?: string[];                 // e.g. ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  maxSizeMB?: number;                // default 3
  value?: File | null;
  onChange?: (file: File | null) => void;
  required?: boolean;
  errorText?: string;
  disabled?: boolean;
  id?: string;
};

const defaultAccept = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "application/msword", // .doc (optional)
];

export default function UploadField({
  label = "Upload your resume",
  sublabel = "PDF, DOCX (max. 3MB)",
  accept = defaultAccept,
  maxSizeMB = 3,
  value = null,
  onChange,
  required,
  errorText,
  disabled,
  id = "resume-upload",
}: Props) {
  const [dragOver, setDragOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [internalError, setInternalError] = React.useState<string | null>(null);

  const maxBytes = maxSizeMB * 1024 * 1024;

  const validate = (file: File): string | null => {
    if (accept.length && !accept.includes(file.type)) {
      return "Unsupported file type.";
    }
    if (file.size > maxBytes) {
      return `File is too large. Max ${maxSizeMB}MB.`;
    }
    return null;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const err = validate(file);
    setInternalError(err);
    onChange?.(err ? null : file);
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    handleFiles(e.target.files);
    // allow choosing the same file again
    e.currentTarget.value = "";
  };

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    if (disabled) return;
    handleFiles(e.dataTransfer.files);
  };

  const openPicker = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const showError = errorText ?? internalError;

  return (
    <Stack gap={1} width="100%">
      <input
        ref={inputRef}
        id={id}
        type="file"
        hidden
        accept={accept.join(",")}
        onChange={onInputChange}
        disabled={disabled}
      />

      <Box
        onClick={openPicker}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        role="button"
        aria-label={label}
        aria-disabled={disabled ? "true" : undefined}
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            openPicker();
          }
        }}
        sx={{
          cursor: disabled ? "not-allowed" : "pointer",
          userSelect: "none",
          px: 3,
          py: 4,
          borderRadius: 2,
          outline: "none",
          border: `1.5px dashed ${
            showError
              ? theme.palette.error.main
              : dragOver
              ? theme.palette.primary.main
              : theme.palette.grey[700]
          }`,
          bgcolor: "transparent",
          transition: "all 120ms ease",
          "&:hover": {
            borderColor: disabled ? undefined : theme.palette.primary.main,
            background:
              disabled
                ? undefined
                : `linear-gradient(0deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02))`,
          },
        }}
      >
        <Stack alignItems="center" justifyContent="center" gap={1.5}>
          <UploadFileIcon
            sx={{ fontSize: 40, opacity: 0.9, color: theme.palette.text.secondary }}
          />
          <Typography variant="body2" sx={{ fontWeight: 400, color: theme.palette.text.secondary }}>
            {label}
            {required && <Typography component="span" color="error"> *</Typography>}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {sublabel}
          </Typography>
          
        </Stack>
      </Box>

      {/* Selected file info */}
      {value && (
        <Stack direction="row" alignItems="center" gap={1} mt={0.5}>
          <Chip
            variant="outlined"
            label={`${value.name} • ${(value.size / (1024 * 1024)).toFixed(2)} MB`}
            onDelete={
              disabled
                ? undefined
                : () => {
                    setInternalError(null);
                    onChange?.(null);
                  }
            }
            deleteIcon={<CloseIcon />}
          />
        </Stack>
      )}

      {/* Error helper */}
      {showError && (
        <FormHelperText error sx={{ mt: 0.5 }}>
          {showError}
        </FormHelperText>
      )}
    </Stack>
  );
}
