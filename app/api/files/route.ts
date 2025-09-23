import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const basePath = path.join(process.cwd(), 'public', 'downloads');

        const categories = {
            'quick-guide': '产品快速指南',
            'user-manual': '产品用户手册',
            'maintenance': '运维宝典'
        };

        const filesByCategory: Record<string, string[]> = {};

        for (const [folder, name] of Object.entries(categories)) {
            const categoryPath = path.join(basePath, folder);

            if (fs.existsSync(categoryPath)) {
                const files = fs.readdirSync(categoryPath)
                    .filter(file => {
                        const filePath = path.join(categoryPath, file);
                        return fs.statSync(filePath).isFile();
                    })
                    .map(file => `/downloads/${folder}/${file}`);

                filesByCategory[name] = files;
            } else {
                filesByCategory[name] = [];
            }
        }

        return NextResponse.json(filesByCategory);
    } catch (error) {
        console.error('Error reading files:', error);
        return NextResponse.json({ error: 'Failed to read files' }, { status: 500 });
    }
}
