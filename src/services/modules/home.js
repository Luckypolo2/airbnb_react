import hyRequest from "@/services";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}
