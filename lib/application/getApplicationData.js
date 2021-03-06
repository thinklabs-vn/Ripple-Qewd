/*

 ----------------------------------------------------------------------------
 | qewd-ripple: QEWD-based Middle Tier for Ripple OSI                       |
 |                                                                          |
 | Copyright (c) 2016-17 Ripple Foundation Community Interest Company       |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Will Weatherill                                                  |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  18 May 2017

*/


function getApplicationData(args, finished) {

  //console.log('*** getApplicationData! Session = ' + args.session.id);

  /*
  var results = {
    title: 'My Ripple UI Title',
    logoB64: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERkY3QkQ4QUZDRkYxMUU2QTU4RDlDQTM1NzVBQTNBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERkY3QkQ4QkZDRkYxMUU2QTU4RDlDQTM1NzVBQTNBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRGRjdCRDg4RkNGRjExRTZBNThEOUNBMzU3NUFBM0EyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRGRjdCRDg5RkNGRjExRTZBNThEOUNBMzU3NUFBM0EyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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',
    //themeColors: {
      //base: '#9E0016',
      //light: '#F93E58',
      //lighter: '#F97083'
    //},
    themeColor: 'ffddaa',
    browserTitle: 'My Ripple UI Browser Title'
  };
  */

  var appDataDoc = new this.documentStore.DocumentNode('rippleConfig', ['ui']);
  var data = appDataDoc.getDocument(true);
  if (!data.themeColor) data.themeColor = '';  // legacy

  if (data.logoB64 && Array.isArray(data.logoB64)) data.logoB64 = data.logoB64.join('');

  return finished(data);
}

module.exports = getApplicationData;
