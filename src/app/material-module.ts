import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';


@NgModule({
    exports:[FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatTableModule]
})

export class MaterialModule{

}