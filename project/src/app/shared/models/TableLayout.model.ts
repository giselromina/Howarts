export interface TableLayout {
    title: string;
    headerRows: string[];
    data: any[];
    canEdit: boolean;
    canRemove: boolean;
    // tslint:disable-next-line: ban-types
    functionRemove: Function;
    canLock?: boolean;
    propertyToCheck?: string;
    // tslint:disable-next-line: ban-types
    functionLock?: Function;
}
