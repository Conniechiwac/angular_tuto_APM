/* To create a custom pipe
 * => import Pipe & PipeTransform
 * => create a class that implements PipeTransform
 * => export the class to be sure that all components can import it
 * => declare the name of the pipe in ngModule into app.module & import the custom pipe from the folder where it placed
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}
