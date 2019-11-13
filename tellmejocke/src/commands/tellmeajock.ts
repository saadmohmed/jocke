import {Command, flags} from '@oclif/command'
import * as request from 'request';
export default class tellmeajock extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(tellmeajock)
    getJock(){
    request.get("https://geek-jokes.sameerkumar.website/api" , (response : any )=>{
this.log(response)
    )};
    }

   )
  }
}
