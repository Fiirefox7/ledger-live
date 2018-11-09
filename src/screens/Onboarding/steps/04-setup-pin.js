// @flow

import React, { Component } from "react";
import { Trans } from "react-i18next";
import { View, StyleSheet } from "react-native";

import Button from "../../../components/Button";
import LText from "../../../components/LText";
import BulletList from "../../../components/BulletList";
import OnboardingLayout from "../OnboardingLayout";
import { withOnboardingContext } from "../onboardingContext";
import NanoXPincode from "../assets/NanoXPincode";
import colors from "../../../colors";
import { deviceNames } from "../../../wording";

import type { OnboardingStepProps } from "../types";

class OnboardingStep04SetupPin extends Component<OnboardingStepProps> {
  Footer = () => {
    const { next } = this.props;
    return <Button type="primary" title="Next" onPress={next} />;
  };

  render() {
    return (
      <OnboardingLayout
        header="OnboardingStep04SetupPin"
        Footer={this.Footer}
        noHorizontalPadding
      >
        <View style={styles.hero}>
          <NanoXPincode />
        </View>
        <View style={styles.wrapper}>
          <BulletList
            list={[
              <Trans
                i18nKey="onboarding.step04SetupPin.step1"
                values={deviceNames.nanoX}
              />,
              <Trans i18nKey="onboarding.step04SetupPin.step2">
                {"text"}
                <LText semiBold>bold text</LText>
                {"text"}
              </Trans>,
              <Trans i18nKey="onboarding.step04SetupPin.step3" />,
              <Trans i18nKey="onboarding.step04SetupPin.step4" />,
            ]}
          />
        </View>
      </OnboardingLayout>
    );
  }
}

const styles = StyleSheet.create({
  hero: {
    paddingVertical: 60,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
  },
  wrapper: {
    padding: 16,
  },
});

export default withOnboardingContext(OnboardingStep04SetupPin);
