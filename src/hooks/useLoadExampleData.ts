import exampleUserData from "../data/exampleUserData"
import useEnableExportImport from "./useEnableExportImport"

const useLoadExampleData = () => {
    const importFunc = useEnableExportImport()

    return () => importFunc(exampleUserData)
}

export default useLoadExampleData
