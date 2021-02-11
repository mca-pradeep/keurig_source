class NetworkService {
  constructor(url, type, parameter) {
    this.url = url;
    this.method = type;
    if (parameter === undefined) parameter = null;
    this.reqObject = parameter;
  }

  fetchOptions(reqMethod, multipart) {
    let optionObj = {
      method: null,
      //mode: 'no-cors',
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: null,
    };
    optionObj.method = reqMethod;
    if (optionObj.method !== "GET") {
      if (multipart !== undefined) {
        optionObj.headers["Content-Type"] = "multipart/form-data";
        optionObj.body = this.reqObject;
      } else {
        optionObj.body = JSON.stringify(this.reqObject);
      }
    }
    return optionObj;
  }

  applyThis(url, method, isMultipart) {
    let options = this.fetchOptions(method, isMultipart);
    return fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        return jsonData;
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  get() {
    return this.applyThis(this.url, "GET");
  }
  post(isMultipart) {
    return this.applyThis(this.url, "POST", isMultipart);
  }
  put(isMultipart) {
    return this.applyThis(this.url, "PUT", isMultipart);
  }
  delete() {
    return this.applyThis(this.url, "DELETE");
  }

  hitNetwork() {
    let method = this.method;
    switch (method) {
      case "POST":
        return this.post();
      case "PUT":
        return this.put();
      case "DELETE":
        return this.delete();
      case "multipart":
        if (this.reqObject && this.reqObject.id > 0) {
          return this.post(true);
        } else {
          return this.put(true);
        }
      default:
        return this.get();
    }
  }
}
export default NetworkService;
