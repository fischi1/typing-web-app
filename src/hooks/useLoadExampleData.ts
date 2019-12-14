import useEnableExportImport from "./useEnableExportImport";
import exampleUserData from "../data/exampleUserData";

const useLoadExampleData = () => {
    const importFunc = useEnableExportImport();

    return () => {
        importFunc(exampleUserData);
    }
}

export default useLoadExampleData;