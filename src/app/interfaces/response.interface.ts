export interface Data {
  data: Journay[];
  message: string;
}

export interface Journay {
  origin: string;
  destination: string;
  price: number;
  flights: Flight[];
}

export interface Flight {
  origin: string;
  destination: string;
  price: number;
  transport: Transport;
}

export interface Transport {
  flightCarrier: string;
  flightNumber: string;
}
