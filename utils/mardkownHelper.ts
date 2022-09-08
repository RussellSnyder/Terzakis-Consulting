import matter from "gray-matter"
import fs from 'fs';

export function parseMarkdownFile<T>(file: string) {
    const readFile = fs.readFileSync(file)
    
    const {data, content} = matter(readFile)

    return {
        content,
        data: (data as T)
    }

}