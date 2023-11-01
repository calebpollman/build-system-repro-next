import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

export default function Home() {
  return <Authenticator />;
}
