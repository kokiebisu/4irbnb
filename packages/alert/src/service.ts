import { IAlertService, IMessage } from "./type";

export class AlertService {
  private alertService: IAlertService;
  constructor(alertService: IAlertService) {}

  private sayHello(to: string, from: string, message: IMessage) {
    this.alertService.sendMessage(to, from, message);
  }

  private sendPDF() {
    this.alertService.sendFile();
  }
}
