import { Layout } from "@/app/shared/components/layout/layout";
import { Routes } from "@angular/router";
import { LegalNotice } from "./legal-notice/legal-notice";

export const LEGAL_ROUTES: Routes = [
  {
    path: "",
    children: [
      { path: "notice", component: LegalNotice }
    ]
  }
]