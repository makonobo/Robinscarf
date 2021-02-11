

// for sessions logging in, and out, 
export const postSession = (user) =>{
  return $.ajax({
    method: "POST",
    url: '/api/session',
    data: { user: user}
  });
}

export const deleteSession = () =>{
  return $.ajax({
    method: "DELETE",
    url: '/api/session'
  });
}

