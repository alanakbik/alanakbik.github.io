import { palette } from "@/content/const";
import type { TimelineEntryData } from "@/content/types";

/**
 * Creates a 1:1 mapping between news categories and colors for the tags beside the date.
 * If there are more categories than colors, random colors will be generated. So feel free to extend palette constant.
 */
export function getCategoryColorMap(items: TimelineEntryData[]) {
    const categories = items.map(item => item.category).filter((v, i, a) => a.indexOf(v) === i);
    const map = new Map<string, string>();
    let i = 0;
    for (const category of categories) {
        if (i < palette.length) {
            map.set(category, palette[i]);
            i++;
        } else {
            let randomColor = palette[0];
            while (palette.includes(randomColor)) {
                const r = Math.max(Math.min(Math.random() * 0xFF, 0xBB), 0x44) << 0;
                const g = Math.max(Math.min(Math.random() * 0xFF, 0xBB), 0x44) << 0;
                const b = Math.max(Math.min(Math.random() * 0xFF, 0xBB), 0x44) << 0;
                randomColor = "#" + r.toString(16) + g.toString(16) + b.toString(16);
            }
            map.set(category, randomColor);
        }
    }
    return map;
}