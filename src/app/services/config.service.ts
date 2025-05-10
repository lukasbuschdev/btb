import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly supabaseUrl = process.env['NG_APP_SUPABASE_URL'];
  readonly supabaseKey = process.env['NG_APP_SUPABASE_KEY'];
}
