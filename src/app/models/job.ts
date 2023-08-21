export class Job{
  public id: number;
  public company: string;
  public logo: string;
  public new: boolean;
  public featured: boolean;
  public position: string;
  public role: string;
  public level: string;
  public postedAt: string;
  public contract: string;
  public location: string;
  public languages: string[];
  public tools: string[];

  constructor(_parameters: any) {
    this.id = (_parameters?.id != null ? _parameters.id : undefined);
    this.company = (_parameters?.company != null ? _parameters.company : undefined);
    this.logo = (_parameters?.logo != null ? _parameters.logo : undefined);
    this.new = (_parameters?.new != null ? _parameters.new : undefined);
    this.featured = (_parameters?.featured != null ? _parameters.featured : undefined);
    this.position = (_parameters?.position != null ? _parameters.position : undefined);
    this.role = (_parameters?.role != null ? _parameters.role : undefined);
    this.level = (_parameters?.level != null ? _parameters.level : undefined);
    this.postedAt = (_parameters?.postedAt != null ? _parameters.postedAt : undefined);
    this.contract = (_parameters?.contract != null ? _parameters.contract : undefined);
    this.location = (_parameters?.location != null ? _parameters.location : undefined);
    this.languages = (_parameters?.languages != null ? _parameters.languages : undefined);
    this.tools = (_parameters?.tools != null ? _parameters.tools : undefined);
  }

}
