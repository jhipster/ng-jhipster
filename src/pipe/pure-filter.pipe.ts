import { Pipe } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Pipe({ name: 'pureFilter' })
export class PureFilterPipe extends FilterPipe {}
