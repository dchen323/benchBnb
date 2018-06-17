export const fetchBenches = () => (
  $.ajax({
    url: "/api/benches",
    error: err => console.log(err)
  })
);
