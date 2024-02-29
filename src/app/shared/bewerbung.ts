export interface Bewerbung {
    id: string;
    sentTo: string;
	ansprechPartner?: string;
    anschreiben?: string;
    status: number;
    letzterKontakt: string;
    sonstiges?: string;  
}
