import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useHotels = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data } = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      const res = await axiosPublic("/hotels");
      return res.data;
    },
  });

  const allHotels = Array.isArray(data) ? data : [];
  console.log(allHotels);
  return [allHotels, refetch];
};

export default useHotels;
