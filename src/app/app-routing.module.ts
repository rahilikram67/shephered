import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "root",
    loadChildren: () => import("./pages/root/root.module").then(m => m.RootModule)
  },
  {
    path: "empty",
    loadChildren: () => import("./pages/empty/empty.module").then(m => m.EmptyModule)
  },
  {
    path: "root/form",
    loadChildren: () => import("./pages/form/form.module").then(m => m.FormModule)
  },
  {
    path: "",
    redirectTo: "root",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
