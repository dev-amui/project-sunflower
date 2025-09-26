'use client';

import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


interface IConfimationDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    header?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    styling?: {
        cancelButton?: string;
        confirmButton?: string;
        header?: string;
        description?: string;
    }
}

const ConfirmationDialog = ({ onClose, onConfirm, open, cancelText, confirmText, description, header, styling }: IConfimationDialogProps) => {
    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className={styling?.header}>{header}</AlertDialogTitle>
                    <AlertDialogDescription className={styling?.description}>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={styling?.cancelButton}>{cancelText ? cancelText : 'Cancel'}</AlertDialogCancel>
                    <AlertDialogAction className={styling?.confirmButton} onClick={onConfirm}>{confirmText ? confirmText : 'Continue'}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ConfirmationDialog
