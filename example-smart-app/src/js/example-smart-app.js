const hardCodedToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6Ilp6a1lUb2ZvdHFZdFhLS2h5Q3NhVkpoVmNEYzgzcFE3c2xULWRqQ25Ick0iLCJhbGciOiJSUzI1NiIsIng1dCI6IjNQYUs0RWZ5Qk5RdTNDdGpZc2EzWW1oUTVFMCIsImtpZCI6IjNQYUs0RWZ5Qk5RdTNDdGpZc2EzWW1oUTVFMCJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84ZGM5ODNjOS0yMDc3LTRkMmItODVmNi1iYjI0NGFlNjAwNGUvIiwiaWF0IjoxNzI5MjgxMDU3LCJuYmYiOjE3MjkyODEwNTcsImV4cCI6MTcyOTI4NTA4MCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhZQUFBQVlPSG9UOVo4M3ZEQUZrM3pidmJab1UrTGlYZm8vVFRyTTB4UkVFK2R6SGVOelZ1bTNVYUY1WVA5V0hEZnA2TDVyMzF5VUZSakhDR2VHbHEyRmJ0ckpRPT0iLCJhbXIiOlsicHdkIiwicnNhIl0sImFwcF9kaXNwbGF5bmFtZSI6Ik11bGVTb2Z0IFBvc3RtYW4iLCJhcHBpZCI6ImQxMDM4YmY1LWY2NTctNDM4Yy1hOGE5LWMzNjhjZmMwZjM5MiIsImFwcGlkYWNyIjoiMSIsImRldmljZWlkIjoiM2ZiYTYxZmQtNDU3OS00ODAxLTg4ZWItM2IwODk3NjBiYjA5IiwiZmFtaWx5X25hbWUiOiJCYWxkaWNrIiwiZ2l2ZW5fbmFtZSI6Ikphc29uIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjYwMToyNDY6NTYwMDpmYTIwOjc4Zjc6ZmI4ODplNjgzOjU0ZmIiLCJuYW1lIjoiQmFsZGljaywgSmFzb24gUiIsIm9pZCI6IjQxMjBmYjI2LWFjY2EtNDA4NS04NTI1LThkMjk0NmExNzgxOSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xNzkwMzgwNDAwLTgwMjcxNDA2OS03OTkwNzE5NC02NzA1NCIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMDQ1OEU1RDMyIiwicmgiOiIwLkFSSUF5WVBKalhjZ0swMkY5cnNrU3VZQVRnTUFBQUFBQUFBQXdBQUFBQUFBQUFEV0FLUS4iLCJzY3AiOiJGaWxlcy5SZWFkV3JpdGUuQWxsIExpc3RJdGVtcy5TZWxlY3RlZE9wZXJhdGlvbnMuU2VsZWN0ZWQgTWFpbC5SZWFkIFNpdGVzLlJlYWRXcml0ZS5BbGwgVXNlci5SZWFkIHByb2ZpbGUgb3BlbmlkIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiT2RkMVBiZjhZZm5tSHQwMlJDTUVfYlJzX3ZMaEpXVzMwTHpNMHVHOVRhSSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjhkYzk4M2M5LTIwNzctNGQyYi04NWY2LWJiMjQ0YWU2MDA0ZSIsInVuaXF1ZV9uYW1lIjoiSmFzb24uQmFsZGlja0Btb2ZmaXR0Lm9yZyIsInVwbiI6Ikphc29uLkJhbGRpY2tAbW9mZml0dC5vcmciLCJ1dGkiOiIwTGJ5UndiYU9FZTJuZjV0Skw5R0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMTQgMSIsInhtc19zdCI6eyJzdWIiOiJlUldvQWpEZ2p3LWttWndQOERQbGZmeThCckJrSGRWLTJ6RkRCbFBUbVRzIn0sInhtc190Y2R0IjoxNDE5ODk0ODQ3fQ.HcYP49HYgR88kskbs8bN9OOLATjQ8ocFg92WHsWAWfnjz7MSFF3vuSCI8MagsNE8x8EkVljtYgubHrLbZQNwC-vQjAF-00Ncnkt6nH8lFaLgfuHB8_sLvG8pDQj1x_PqxW1lgHo2mp5yiDCw9kZqLTH_ojrwGVR8hGNSeW21G81UJeMxsFGgYVUEmBTMjWKpUmtVO0LbjZGEDAAVbymBnNzERSijcoxYXcRHjX0FFugItRmPFMl8XXgkgB390iz1KTEDc3a2liv-6bT9CmbLiEw_TkS5v8Myzqs4OEd4j35MUV3fEf7qb73bKy473jGuj3bqqQnibv5N_6cH8_Rhpg';

var selectedDocumentUrl = '';
var accessToken = ''; // Declare accessToken in the global scope
var itemId = '';
var selectedItemId = '';
var downloadUrl = '';

function selectDocument(url, itemId) {
    selectedDocumentUrl = url; // Store the selected document URL
    selectedItemId = itemId;  // Store the selected item ID

    // Log the selectedDocumentUrl and selectedItemId for verification
    console.log('Document URL:', selectedDocumentUrl);
    console.log('Selected Item ID:', selectedItemId);
    
    $('#selected-document').text('Selected Document: ' + url); // Display the selected document
}

function getGraphToken() {
      var tokenUrl = `https://login.microsoftonline.com/8dc983c9-2077-4d2b-85f6-bb244ae6004e/oauth2/v2.0/token`;

      return $.ajax({
        url: tokenUrl,
        method: 'POST',
        data: {
          grant_type: 'client_credentials',
          client_id: 'd1038bf5-f657-438c-a8a9-c368cfc0f392',
          client_secret: '1C48Q~TwZR~Al2a2CK.Ce-dzEL8GDstJ.BJU9bT6',
          scope: 'https://graph.microsoft.com/.default'
        }
            }).done(function(response) {
        console.log("Token received successfully", response);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Failed to get token:", textStatus, errorThrown);
      });
    }

function getDownloadUrl() {
    return new Promise((resolve, reject) => {
        if (!selectedItemId) {
            alert('No document selected.');
            reject('No document selected.'); // Reject the Promise
            return;
        }

        const apiUrl = `https://graph.microsoft.com/v1.0/sites/moffitt.sharepoint.com,7a344d29-3697-4f85-803f-0a1f7266ef59,92cfd7c5-8b6f-4029-adf9-35991e902684/lists/893983b1-68e7-40f4-962f-8e56ec5403bd/items/${selectedItemId}/driveItem?select=id,@microsoft.graph.downloadUrl`;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${hardCodedToken}`, // Ensure you have your token here
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(error => {
                    throw new Error('Error fetching download URL: ' + error);
                });
            }
            return response.json();
        })
        .then(data => {
            downloadUrl = data['@microsoft.graph.downloadUrl'];
            console.log('Download URL:', downloadUrl);
            resolve(downloadUrl); // Resolve with the download URL
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to retrieve download URL.');
            reject(error); // Reject on error
        });
    });
}








function sendToEMR() {
    // Ensure a document has been selected
    if (!selectedDocumentUrl) {
        alert('No document selected.');
        return;
    }

// Fetch the download URL first, then send the document to the EMR
    getDownloadUrl()
        .then(downloadUrl => {
            // Fetch the document and convert it to Base64
            return fetchDocumentAndConvertToBase64(downloadUrl);
        })
        .then(base64Data => {
            // Now define the document reference payload using the Base64-encoded document
    const documentReference = {
        'resourceType': 'DocumentReference',
        'subject': {
            'reference': 'Patient/24182583' // May need to change if this variable is not getting passed
        },
        'type': {
            'coding': [
        {
          'system': 'https://fhir.cerner.com/9dbb03d5-622d-4631-bd69-c97ef6942d65/codeSet/72',
          'code': '1046116289' ,
          'display': 'TEST FHIR DOC',
          'userSelected': true
        }
      ],
            'text': 'TEST FHIR DOC'
        },
        'author': [
            {
                'reference': 'Practitioner/9767220' // Replace with actual practitioner reference
            }
        ],
        'indexed': new Date().toISOString(), // The current timestamp
        'status': 'current',
        'docStatus': 'final',
        'description': 'FHIR Education Document',
        'content': [
            {
                'attachment': {
                    'contentType': 'application/pdf',
                    'data': base64Data,  // Base64 encoded document data
                    'title': 'Test FHIR Doc', // Add appropriate title
                    'creation': new Date().toISOString() // Add document creation dat
                }
            }
        ],
        'context': {
            'encounter':[
                {
                    'reference': 'Encounter/33073244' // Ensure this is the correct encounter reference
                }
            ],
            'period': {
                'start': new Date().toISOString(), // Use the appropriate start date
                'end': new Date().toISOString() // Use the appropriate end date
            }
        }
    };

    // The FHIR API endpoint URL (replace with the correct URL)
    const fhirEndpoint = 'https://fhir-ehr.sandboxcerner.com/r4/9dbb03d5-622d-4631-bd69-c97ef6942d65/DocumentReference';

    // Make the POST request to the FHIR server
    fetch(fhirEndpoint, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken ,
            'Content-Type': 'application/json+fhir',
            'Accept': 'application/json+fhir'
        },
        body: JSON.stringify(documentReference)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(error => {
                throw new Error('Error posting document: ' + error);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Document posted successfully:', data);
        alert('Document posted to EMR successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to post document to EMR.');
    });
       }) // <-- Missing closing parenthesis added here
        .catch(error => {
            console.error('Error fetching or converting document:', error);
            throw error;
        });
}


// Function to fetch and convert the document to Base64
function fetchDocumentAndConvertToBase64(documentUrl) {
    return fetch(documentUrl)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            let binary = '';
            let bytes = new Uint8Array(buffer);
            for (let i = 0; i < bytes.length; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);  // Base64 encode the binary data
        })
        .catch(error => {
            console.error('Error fetching or converting document:', error);
            throw error;
        });
}



(function(window) {
  window.extractData = function() {
    var ret = $.Deferred();

    function onError() {
      console.log('Loading error', arguments);
      ret.reject();
    }

    // Move  get graph Function back here if needed


 function onReady(smart) {
      if (smart.hasOwnProperty('patient')) {
        var patient = smart.patient;
        var pt = patient.read();
        var encounterId = smart.tokenResponse.encounter;
        accessToken = smart.tokenResponse.access_token; // Set the global accessToken here

        var obv = smart.patient.api.fetchAll({
          type: 'Observation',
          query: {
            code: {
              $or: [
                'http://loinc.org|8302-2', 'http://loinc.org|8462-4',
                'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
                'http://loinc.org|2089-1'
              ]
            }
          }
        });

        var docRef = smart.patient.api.fetchAll({
          type: 'DocumentReference',
          query: {
            encounter: encounterId
          },
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        });

        $.when(pt, obv, docRef).fail(onError);

        $.when(pt, obv, docRef).done(function(patient, obv, docRef) {
          var byCodes = smart.byCodes(obv, 'code');
          var gender = patient.gender;

          var fname = '';
          var lname = '';

          if (typeof patient.name[0] !== 'undefined') {
            fname = patient.name[0].given.join(' ');
            lname = patient.name[0].family.join(' ');
          }

          var height = byCodes('8302-2');
          var systolicbp = getBloodPressureValue(byCodes('8480-6'));
          var diastolicbp = getBloodPressureValue(byCodes('8462-4'));
          var hdl = byCodes('2085-9');
          var ldl = byCodes('2089-1');

          var p = defaultPatient();
          p.birthdate = patient.birthDate;
          p.gender = gender;
          p.fname = fname;
          p.lname = lname;
          p.height = getQuantityValueAndUnit(height[0]);

          if (typeof systolicbp != 'undefined') {
            p.systolicbp = systolicbp;
          }

          if (typeof diastolicbp != 'undefined') {
            p.diastolicbp = diastolicbp;
          }

          p.hdl = getQuantityValueAndUnit(hdl[0]);
          p.ldl = getQuantityValueAndUnit(ldl[0]);

          p.docRef = docRef;

          ret.resolve(p);
        });
      } else {
        onError();
      }
    }



      

    FHIR.oauth2.ready(onReady, onError);
    return ret.promise();
  };



    

   




    
  function defaultPatient() {
    return {
      fname: '',
      lname: '',
      gender: '',
      birthdate: '',
      height: '',
      systolicbp: '',
      diastolicbp: '',
      ldl: '',
      hdl: '',
      docRef: []
    };
  }

  function getBloodPressureValue(BPObservations, typeOfPressure) {
    var formattedBPObservations = [];
    BPObservations.forEach(function(observation) {
      var BP = observation.component.find(function(component) {
        return component.code.coding.find(function(coding) {
          return coding.code == typeOfPressure;
        });
      });
      if (BP) {
        observation.valueQuantity = BP.valueQuantity;
        formattedBPObservations.push(observation);
      }
    });

    return getQuantityValueAndUnit(formattedBPObservations[0]);
  }

  function getQuantityValueAndUnit(ob) {
    if (typeof ob != 'undefined' &&
        typeof ob.valueQuantity != 'undefined' &&
        typeof ob.valueQuantity.value != 'undefined' &&
        typeof ob.valueQuantity.unit != 'undefined') {
      return ob.valueQuantity.value + ' ' + ob.valueQuantity.unit;
    } else {
      return undefined;
    }
  }

  window.drawVisualization = function(p) {
    $('#holder').show();
    $('#loading').hide();
    $('#fname').html(p.fname);
    $('#lname').html(p.lname);
    $('#gender').html(p.gender);
    $('#birthdate').html(p.birthdate);
    $('#height').html(p.height);
    $('#systolicbp').html(p.systolicbp);
    $('#diastolicbp').html(p.diastolicbp);
    $('#ldl').html(p.ldl);
    $('#hdl').html(p.hdl);

      // Concatenate first name and last name and set it in the header
    $('#patient-name').text(p.fname + ' ' + p.lname);

    if (p.docRef.length > 0) {
      var docRefHtml = '<h2>Education Added this Visit</h2><table><tr><th>Document Name</th><th>Action</th></tr>';
      p.docRef.forEach(function(doc) {
        var docUrl = doc.content[0].attachment.url;
        var docId = docUrl.split('/').pop(); // Extracting the ID from the URL
        var contentType = doc.content[0].attachment.contentType;
        docRefHtml += '<tr><td>' + (doc.description || 'No description available') + '</td>';
        docRefHtml += '<td><button onclick="openDocument(\'' + docId + '\', \'' + contentType + '\')">Open</button></td></tr>';
      });
      docRefHtml += '</table>';
      $('#document-references').html(docRefHtml);
    } else {
      $('#document-references').html('<h2>No Document References Found</h2>');
    }
  };

  window.openDocument = function(docId, contentType) {
    FHIR.oauth2.ready(function(smart) {
      var accessToken = smart.tokenResponse.access_token;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', smart.server.serviceUrl + '/Binary/' + docId);
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xhr.setRequestHeader('Accept', contentType);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function() {
        if (xhr.status === 200) {
          // Extract the filename from the Content-Disposition header
          var contentDisposition = xhr.getResponseHeader('Content-Disposition');
          var filename = contentDisposition ? contentDisposition.split('filename=')[1].split(';')[0].replace(/"/g, '') : 'document.pdf';

          // Create a blob from the response and open it in a new tab
          var blob = new Blob([xhr.response], { type: contentType });
          var blobUrl = URL.createObjectURL(blob);
          window.open(blobUrl, '_blank');
        } else {
          console.log('Failed to fetch document');
        }
      };

      xhr.onerror = function() {
        console.log('Failed to fetch document');
      };

      xhr.send();
    });
  };


function searchAllDocuments(token) {
    var siteId = 'moffitt.sharepoint.com,7a344d29-3697-4f85-803f-0a1f7266ef59,92cfd7c5-8b6f-4029-adf9-35991e902684';
    var listId = '893983b1-68e7-40f4-962f-8e56ec5403bd';
    var searchUrl = `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items?expand=fields`;

    return $.ajax({
        url: searchUrl,
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}


  function displaySearchResults(items) {
    var searchHtml = '<h2>Search Results</h2><table><tr><th>Document Name</th><th>Action</th></tr>';
    
    items.forEach(function(item) {
        // Use LinkFilename for display purposes
        var docTitle = item.fields.LinkFilename; // Change from item.fields.Title to item.fields.LinkFilename
        var docUrl = item.webUrl; // Retain the original document URL
        itemId = item.id;  // Capture the item ID

        searchHtml += '<tr><td>' + docTitle + '</td>'; // Display LinkFilename
        searchHtml += '<td><button onclick="selectDocument(\'' + docUrl + '\', \'' + itemId + '\')">Select</button></td></tr>'; // Pass both docUrl and itemId
    });
    
    searchHtml += '</table>';
    $('#search-results').html(searchHtml);
}





window.performSearch = function() {
    const query = $('#search-query').val().trim();

    if (query) {
        const token = hardCodedToken;

        searchAllDocuments(token)
            .then(function(data) {
                // Filter results based on the query in LinkFilename
                const filteredResults = data.value.filter(item => 
                    item.fields.LinkFilename.includes(query) && item.fields.DocIcon === 'pdf'
                );
                displaySearchResults(filteredResults);
            })
            .catch(function(error) {
                console.log('Error searching documents', error);
            });
    } else {
        alert('Please enter a search term.');
    }
    };


    $(document).ready(function() {
        $('#search-button').click(performSearch); // Attach the click event handler
    });

    // Other function definitions...




})(window);



