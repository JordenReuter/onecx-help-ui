import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { provideErrorTailorConfig, errorTailorImports } from '@ngneat/error-tailor'

import { AutoCompleteModule } from 'primeng/autocomplete'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import { ConfirmationService } from 'primeng/api'
import { DataViewModule } from 'primeng/dataview'
import { DialogModule } from 'primeng/dialog'
import { DropdownModule } from 'primeng/dropdown'
import { FieldsetModule } from 'primeng/fieldset'
import { FileUploadModule } from 'primeng/fileupload'
import { InputTextModule } from 'primeng/inputtext'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { KeyFilterModule } from 'primeng/keyfilter'
import { ListboxModule } from 'primeng/listbox'
import { MultiSelectModule } from 'primeng/multiselect'
import { RippleModule } from 'primeng/ripple'
import { SelectButtonModule } from 'primeng/selectbutton'
import { TableModule } from 'primeng/table'
import { ToastModule } from 'primeng/toast'
import { TooltipModule } from 'primeng/tooltip'

import { PortalCoreModule } from '@onecx/portal-integration-angular'

import { LabelResolver } from './label.resolver'

@NgModule({
  declarations: [],
  imports: [
    PortalCoreModule.forMicroFrontend(),
    AutoCompleteModule,
    CommonModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    ReactiveFormsModule,
    RippleModule,
    SelectButtonModule,
    TableModule,
    ToastModule,
    TooltipModule,
    TranslateModule,
    errorTailorImports
  ],
  exports: [
    AutoCompleteModule,
    CommonModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    ReactiveFormsModule,
    RippleModule,
    SelectButtonModule,
    TableModule,
    ToastModule,
    TooltipModule,
    TranslateModule,
    errorTailorImports
  ],
  //this is not elegant, for some reason the injection token from primeng does not work across federated module
  providers: [
    ConfirmationService,
    LabelResolver,
    provideErrorTailorConfig({
      controlErrorsOn: { async: true, blur: true, change: true },
      errors: {
        useFactory: (i18n: TranslateService) => {
          return {
            required: () => i18n.instant('VALIDATION.ERRORS.EMPTY_REQUIRED_FIELD'),
            maxlength: ({ requiredLength }) =>
              i18n.instant('VALIDATION.ERRORS.MAXIMUM_LENGTH').replace('{{chars}}', requiredLength),
            minlength: ({ requiredLength }) =>
              i18n.instant('VALIDATION.ERRORS.MINIMUM_LENGTH').replace('{{chars}}', requiredLength),
            pattern: () => i18n.instant('VALIDATION.ERRORS.PATTERN_ERROR')
          }
        },
        deps: [TranslateService]
      },
      //this is required because primeng calendar wraps things in an ugly way
      blurPredicate: (element: Element) => {
        return ['INPUT', 'TEXTAREA', 'SELECT', 'CUSTOM-DATE', 'P-CALENDAR', 'P-DROPDOWN'].some(
          (selector) => element.tagName === selector
        )
      }
    })
  ]
})
export class SharedModule {}
