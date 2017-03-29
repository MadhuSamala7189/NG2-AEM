export class AddressSuggestion {
  id: string;
  description: string;
  toString(): string {
   return this.description;
  }
}
