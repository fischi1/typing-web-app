import { highlightColors } from "../highlightColors"

type HighlightColorsType = typeof highlightColors

type MappedColorType = {
    [K in keyof HighlightColorsType]: number
}

var keys = Object.keys(highlightColors)
var mapped: Record<string, number> = {}

var highlightColorsDic = highlightColors as Record<string, string>

keys.forEach(k => {
    mapped[k] = parseInt(highlightColorsDic[k].replace(/^#/, ""), 16)
})

export default mapped as MappedColorType
