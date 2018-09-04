import { Injectable } from '@angular/core';
import {AuthService} from '../service/auth.service';
@Injectable()
export class ShareService {

    user:any
    currentProfile:any;
    constructor() { }
    // setUser(value){
    //     this.user=value
    // }
    setCurrentProfile(value){
        this.currentProfile=value
    }
    getCurrentProfile(){
        return this.currentProfile;
    }
}