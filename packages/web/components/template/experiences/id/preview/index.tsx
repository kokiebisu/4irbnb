import { usePreview } from "./logic";

export const Preview = () => {
    const data = usePreview();
    return <Preview {...data} />
}