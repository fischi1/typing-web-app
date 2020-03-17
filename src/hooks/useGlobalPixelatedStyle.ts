import { makeStyles } from "@material-ui/styles"
import clsx from "clsx"

const pixelatedImage = "useGlobalPixelatedStyle"
const pixelatedImageMoz = "useGlobalPixelatedStyleMoz"
const pixelatedImageCrisp = "useGlobalPixelatedStyleCrisp"

const allClasses = clsx(pixelatedImage, pixelatedImageMoz, pixelatedImageMoz)

const useStyles = makeStyles({
    "@global": {
        ["." + pixelatedImage]: {
            imageRendering: "pixelated"
        },
        ["." + pixelatedImageMoz]: {
            imageRendering: "-moz-crisp-edges"
        },
        ["." + pixelatedImageCrisp]: {
            imageRendering: "crisp-edges"
        }
    }
})

const useGlobalPixelatedStyle = () => {
    useStyles()
}

export default useGlobalPixelatedStyle
export { allClasses as pixelatedStyleClass }
