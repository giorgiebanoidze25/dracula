import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { RESTService } from '../../services/rest.service';
import * as functions from '../slice/slice.functions';
import { slices } from '../util';

@Injectable()
export class SessionEffects {
    constructor(private actions$: Actions,
        private dataService: RESTService) { }

    @Effect()
    login$ = functions.loadFromRemote$(this.actions$, slices.SESSION, this.dataService, 'login', this.transform);

    transform({ meta }) {
        return {
            token: meta.token,
            user: { firstName: meta.profile.firstName, lastName: meta.profile.lastName }
        };
    }
}
