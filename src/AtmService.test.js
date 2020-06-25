import { italic } from "ansi-colors";
import AtmService from "./AtmService";
import expectExport from "expect";

it('shold deliver display info', () => { 
   let atmService = new AtmService()
    expect(atmService.pushButtonA('')).toBe('Enter customer number')
})