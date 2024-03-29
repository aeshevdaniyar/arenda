import {
  Box,
  Container,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { FormNavigation, FormStep } from "..";
import { useSearchParams } from "react-router-dom";
import { FormStepperProvider } from "./FormStepperContext";
import { FormCard } from "@shared/ui/FormCard";

export interface FormStepRenderProps {
  onNext?: () => void;
  onPrev?: () => void;
  navigation?: ReactNode;
}
export interface FormStepperProps {
  forms?: {
    stepTitle: string;
    stepScreens: {
      id: number | string;
      render?: (props: FormStepRenderProps) => ReactNode;
      onComplete?: () => void;
    }[];
  }[];
  onComplete?: () => void;
  finalView?: ReactNode;
}

export interface FormStepValue {
  step: number;
  screen: number;
}

export const FormStepper: FC<PropsWithChildren<FormStepperProps>> = (props) => {
  const { forms, onComplete, finalView } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [pastStages, setPastStages] = useState(0);
  useEffect(() => {
    if (searchParams.get("step") == undefined) {
      searchParams.set("step", "0");
    }

    if (searchParams.get("screen") == undefined) {
      searchParams.set("screen", "0");
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    setSearchParams(searchParams, {
      replace: true,
      preventScrollReset: true,
    });
  }, [searchParams, setSearchParams]);

  const onNext = () => {
    if (forms) {
      const queryStep = Number(searchParams.get("step"));
      const queryScreen = Number(searchParams.get("screen"));

      if (forms[queryStep]?.stepScreens[queryScreen]?.onComplete) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        forms[queryStep]?.stepScreens[queryScreen]?.onComplete();
      }

      const step = forms[queryStep];
      const nextScreen = step.stepScreens[queryScreen + 1] || undefined;

      if (nextScreen != undefined) {
        searchParams.set("screen", `${queryScreen + 1}`);
        setSearchParams(searchParams);
      }

      if (nextScreen == undefined && forms[queryStep + 1] != undefined) {
        searchParams.set("step", `${Number(searchParams.get("step")) + 1}`);
        setPastStages((prev) =>
          Math.max(prev, Number(searchParams.get("step")) + 1)
        );
        searchParams.set("screen", `0`);
        setSearchParams(searchParams);
      }

      if (
        forms.length - 1 == Number(searchParams.get("step")) &&
        nextScreen == undefined
      ) {
        onComplete && onComplete();
      }
    }
  };

  const onPrev = () => {
    if (forms) {
      const queryStep = Number(searchParams.get("step"));
      const queryScreen = Number(searchParams.get("screen"));
      const step = forms[queryStep];
      const nextScreen = step?.stepScreens[queryScreen - 1];

      if (nextScreen != undefined) {
        searchParams.set("screen", `${Number(searchParams.get("screen")) - 1}`);
        setSearchParams(searchParams, {
          replace: true,
        });
      }

      if (
        nextScreen == undefined &&
        forms[Number(searchParams.get("step")) - 1] != undefined
      ) {
        searchParams.set(
          "screen",
          `${forms[queryStep - 1].stepScreens.length - 1}`
        );
        searchParams.set("step", `${queryStep - 1}`);
        setSearchParams(searchParams, {
          replace: true,
        });
      }
    }
  };

  const jump = (step: number) => {
    searchParams.set("step", `${step}`);
    searchParams.set("screen", `${0}`);

    setSearchParams(searchParams);
  };

  return (
    <Box minH="100vh" pt={4} pb={"24"} bgColor={"blackAlpha.100"}>
      <FormStepperProvider
        screen={Number(searchParams.get("screen"))}
        step={Number(searchParams.get("step"))}
      >
        <Stepper
          margin="0 auto"
          maxW={"5xl"}
          px={4}
          size="lg"
          colorScheme="red"
          index={Number(searchParams.get("step"))}
          mb={6}
        >
          {forms?.map((step, index) => (
            <Step
              key={index}
              onClick={() => {
                if (pastStages >= index) {
                  jump(index);
                }
              }}
            >
              <StepIndicator cursor={"pointer"}>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Stack
                cursor={"pointer"}
                direction={["column", "row"]}
                flexShrink="0"
              >
                <StepTitle>{step.stepTitle}</StepTitle>
              </Stack>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Container maxW={"2xl"}>
          {forms &&
            forms.map((form, step) => {
              const { stepScreens } = form;

              return stepScreens.map(({ render, id }, screen) => {
                return (
                  <FormStep key={id} step={step} screen={screen}>
                    {render &&
                      render({
                        onNext,
                        onPrev,
                        navigation: (
                          <FormNavigation onPrev={onPrev} onNext={onNext} />
                        ),
                      })}
                  </FormStep>
                );
              });
            })}

          {finalView && forms && (
            <FormStep screen={0} step={forms.length}>
              <Stack spacing={2}>
                <FormCard title="Ваше объявление почти готово! Проверьте главное:">
                  {finalView}
                </FormCard>

                <FormNavigation onPrev={onPrev} onNext={onNext} />
              </Stack>
            </FormStep>
          )}
        </Container>
      </FormStepperProvider>
    </Box>
  );
};
