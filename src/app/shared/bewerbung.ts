export interface Bewerbung {
    id: string;
    sentto: string;
	ansprechPartner?: string;
    anschreiben?: string;
    status: number;
    letzterKontakt: string;
    sonstiges?: string;  
}
