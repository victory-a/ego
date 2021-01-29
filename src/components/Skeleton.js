import React from "react";
import { Skeleton } from "@chakra-ui/core";

export function LoadingSkeleton() {
  return (
    <div>
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="20px" my="10px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="20px" my="10px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="20px" my="10px" />
    </div>
  );
}

export default function LoadingSkeletonLarge() {
  return (
    <div>
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="30px" my="20px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="30px" my="20px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="30px" my="20px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="30px" my="20px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="30px" my="20px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="30px" my="20px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="30px" my="20px" />
      <Skeleton colorStart="#bac6d8" colorEnd="#cdcdcd" height="30px" my="20px" />
    </div>
  );
}
