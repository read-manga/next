import { ReactElement } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface PropsAlertRoot {
  text: string;
}

export default function AlertRoot({ text }: PropsAlertRoot): ReactElement {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        {text}
      </AlertDescription>
    </Alert>
  );
}
