import { useState } from "react";
import { HandlerStepsProps } from "./HandlerSteps.types";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useStepConfig } from "@/hooks/useStepConfig";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";


export function HandlerSteps(props: HandlerStepsProps) {
    const { onReload } = props;
    const [openDialog, setOpenDialog] = useState(true);
    const { totalSteps, step, setStep, nextStep } = useStepConfig();

    const progressValue = (step / totalSteps) * 100;

    const onCloseDialog = () => {
        onReload(true);
        setOpenDialog(false);
    };

    return (
        <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="mb-3">
                        {step > 1 && step < 5 && (
                            <Button variant="outline" className="mr-2" onClick={() => { }}>
                                Back <ArrowLeft />
                            </Button>
                        )}
                        <div className="mb-2 text-center">
                            Step {step} of {totalSteps}
                        </div>
                        <Progress value={progressValue} />
                    </AlertDialogTitle>
                    <AlertDialogDescription asChild>
                        <div>
                            {step === 1 && <p>Step One</p>}
                            {step === 2 && <p>Step Two</p>}
                            {step === 3 && <p>Step Three</p>}
                            {step === 3 && <p>Step Four</p>}
                            {step === 3 && <p>Step Five</p>}
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>

    )
}