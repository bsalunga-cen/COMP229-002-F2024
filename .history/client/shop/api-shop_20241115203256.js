/*const create = async (params, credentials, shop) => {
    try {
      let response = await fetch('/api/shops/by/'+ params.userId, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: shop
      })
        return response.json()
      } catch(err) { 
        console.log(err)
      }
  }
  
  const list = async (signal) => {
    try {
      let response = await fetch('/api/shops', {
        method: 'GET',
        signal: signal
      })
      return response.json()
    }catch(err) {
      console.log(err)
    }
  }
  
  const listByOwner = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/shops/by/'+params.userId, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return response.json()
    }catch(err){
      console.log(err)
    }
  }
  
  const read = async (params, signal) => {
    try {
      let response = await fetch('/api/shop/' + params.shopId, {
        method: 'GET',
        signal: signal,
      })
      return response.json()
    }catch(err) {
      console.log(err)
    }
  }
  
  const update = async (params, credentials, shop) => {
    try {
      let response = await fetch('/api/shops/' + params.shopId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: shop
      })
      return response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const remove = async (params, credentials) => {
    try {
      let response = await fetch('/api/shops/' + params.shopId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  export {create, list, listByOwner, read, update, remove}
  */


  const create = async (params, credentials, shop) => {
    try {
      let response = await fetch('/api/shops/by/' + params.userId, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + credentials.t,
          // No need to set Content-Type when using FormData, the browser handles it
        },
        body: shop, // shop is FormData here
      });
      return response.json(); // Return the response JSON
    } catch (err) {
      console.log('Error in create shop: ', err);
      throw new Error('Error creating shop');
    }
  };
  
  const list = async (signal) => {
    try {
      let response = await fetch('/api/shops', {
        method: 'GET',
        signal: signal,
      });
      return response.json();
    } catch (err) {
      console.log('Error fetching shops list: ', err);
      throw new Error('Error fetching shops list');
    }
  };
  
  const listByOwner = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/shops/by/' + params.userId, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t,
        },
      });
      return response.json();
    } catch (err) {
      console.log('Error fetching shops by owner: ', err);
      throw new Error('Error fetching shops by owner');
    }
  };
  
  const read = async (params, signal) => {
    try {
      let response = await fetch('/api/shop/' + params.shopId, {
        method: 'GET',
        signal: signal,
      });
      return response.json();
    } catch (err) {
      console.log('Error reading shop: ', err);
      throw new Error('Error reading shop');
    }
  };
  
  const update = async (params, credentials, shop) => {
    try {
      let response = await fetch('/api/shops/' + params.shopId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t,
        },
        body: shop, // FormData for updates too
      });
      return response.json();
    } catch (err) {
      console.log('Error updating shop: ', err);
      throw new Error('Error updating shop');
    }
  };
  
  const remove = async (params, credentials) => {
    try {
      let response = await fetch('/api/shops/' + params.shopId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t,
        },
      });
      return response.json();
    } catch (err) {
      console.log('Error deleting shop: ', err);
      throw new Error('Error deleting shop');
    }
  };
  
  export { create, list, listByOwner, read, update, remove };
  


