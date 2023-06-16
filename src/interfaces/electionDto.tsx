interface IAddressDto {
  id: number;
  homeAddress: string;
  city: string;
  district: string;
  state: string;
  postalCode: string;
}

interface ICandidateList {
  description: string,
  id: number,
  name: string
}
interface IElection {
  id: number;
  name: string;
  description: string;
  voteCount: number;
  availableVotes: number;
  localityType: number;
  localityAddress: IAddressDto;
  hasRetract: boolean;
  minAge: number;
  maxAge: number;
  startDate: Date;
  endDate: Date;
  candidateList?: ICandidateList;
}

export default IElection
