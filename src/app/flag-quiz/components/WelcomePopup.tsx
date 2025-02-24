"use client";

import { Button, SimpleDialog } from "@components/index";

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export function WelcomePopup({ isOpen, onClose, onStart }: WelcomePopupProps) {
  return (
    <SimpleDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Ready to Play?"
      description="Would you like to test your knowledge of African flags?"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Not Now
          </Button>
          <Button
            onClick={() => {
              onClose();
              onStart();
            }}
          >
            Let's Play!
          </Button>
        </>
      }
    >
      <p className="text-muted">
        Click "Let's Play!" to start the quiz and test your knowledge of African flags.
      </p>
    </SimpleDialog>
  );
}
