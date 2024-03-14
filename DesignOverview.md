# Design Overview 
## Model
- [Companies to which you apply and recruiters are called firma](src/app/shared/firma.ts)
- [Applications are called bewerbung](src/app/shared/bewerbung.ts)

A recuiter or a company can have 0 - n applications
## Modules
The App is devides in two modules: 
- [the admin module for creating recuiters, companies and applications](src/app/admin/admin.module.ts)
- [the module for viewing lists of recuiters, companies and applications](src/app/bewerbung/bewerbung.module.ts)

in the shared folder there is the [service for recuiters and companies](src/app/shared/firma.service.ts) and the [application service](src/app/shared/bewerbung.service.ts)
## Components for viewing data
- [List of recuiters and companies](src/app/bewerbung/list-firma/list-firma.component.ts) with [Items for each recuiter and company](src/app/bewerbung/item-firma/item-firma.component.ts)
- [List of applications](src/app/bewerbung/list-bewerbung/list-bewerbung.component.ts) with [Items for each application](src/app/bewerbung/item-bewerbung/item-bewerbung.component.ts)
## Reactive Forms Formulare
- [Form for recruters and companies](src/app/admin/form-firma/form-firma.component.html)
- [Form for applications call 'bewerbung'](src/app/admin/form-firma/form-bewerbung.component.html)
## Services for requests to the backend
- [Service for recruters and companies](src/app/shared/firma.service.ts)
- [Service for applications](src/app/shared/bewerbung.service.ts)
