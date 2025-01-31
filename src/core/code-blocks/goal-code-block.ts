import { getAPI as dv } from 'obsidian-dataview';

export const goalDataview = 
" \
```IndexCard\n \
Goal\n \
```\n \
\n\
\n\
```GtdTable\n \
Goal\n \
```\n \
\n \
\n \
"

export function goalPageContent() : string {
	return goalDataview;
}

