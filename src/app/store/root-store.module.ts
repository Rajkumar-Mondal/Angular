import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from "./root-store.reducer";
import { TodoModule } from "./features/todo/todo.module";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(),
        TodoModule
    ]
})
export class RootStoreModule {}