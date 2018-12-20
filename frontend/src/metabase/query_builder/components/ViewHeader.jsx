import React from "react";
import { Box, Flex } from "grid-styled";
import { t } from "c-3po";
import { color } from "styled-system";
import styled from "styled-components";

import colors, { lighten } from "metabase/lib/colors";

import Card from "metabase/components/Card";
import Button from "metabase/components/Button";
import PopoverWithTrigger from "metabase/components/PopoverWithTrigger";

import { AnimatedMenuWrapper } from "metabase/components/EntityMenu";
import EntityMenuItem from "metabase/components/EntityMenuItem";

import QueryDefinition from "metabase/query_builder/components/QueryDefinition";

const RoundButton = styled(Button)`
  border-radius: 99px;
  border: none;
  &:hover {
    background-color: ${lighten(colors["brand"], 0.4)} !important;
    transition: background-color 300ms linear;
  }
`;

RoundButton.defaultProps = {
  mx: 1,
};
const HeaderButton = styled(Button)`
  background-color: ${lighten(colors["brand"], 0.6)} !important;
  color: ${colors["brand"]};
  text-transform: uppercase;
  border: none;
  font-weight: 900;
  &:hover {
    background-color: ${lighten(colors["brand"], 0.4)} !important;
    transition: background-color 300ms linear;
  }
`;

const Title = styled("h2")`
  ${color} font-weight: 900;
`;

const MenuSection = styled(Box)``;

MenuSection.defaultProps = {
  p: 1,
  className: "border-bottom",
};

const ViewHeader = ({ question, setMode, mode, setModal }) => (
  <Flex
    align="center"
    className="full relative py2 px4 border-bottom bg-white flex"
  >
    <Flex align="center" className="z3">
      <Title color={question.displayName() ? "inherit" : colors["text-light"]}>
        {question.displayName() || t`Untitled question`}
      </Title>
      <Flex ml={1}>
        <HeaderButton
          onClick={() => setModal("save-question")}
          p={1}
          mr={1}
        >{t`Save`}</HeaderButton>
        <PopoverWithTrigger
          hasArrow={false}
          hasBackground={false}
          triggerElement={<HeaderButton p={1} icon="ellipsis" iconSize={22} />}
          horizontalAttachments={["left"]}
          targetOffsetY={0}
        >
          <AnimatedMenuWrapper open={open}>
            <Card>
              <MenuSection>
                <EntityMenuItem link="/" icon="pencil" title={t`Edit`} />
                <EntityMenuItem link="/" icon="move" title={t`Move`} />
                <EntityMenuItem link="/" icon="archive" title={t`Archive`} />
              </MenuSection>
              <MenuSection>
                <EntityMenuItem
                  action={() => setModal("add-to-dashboard")}
                  icon="addtodash"
                  title={t`Add to dashboard`}
                />
                <EntityMenuItem
                  link="/"
                  icon="download"
                  title={t`Download results`}
                />
                <EntityMenuItem link="/" icon="share" title={t`Share`} />
              </MenuSection>
              <MenuSection>
                <EntityMenuItem link="/" icon="alert" title={t`Get alerts`} />
              </MenuSection>
              <MenuSection>
                <EntityMenuItem
                  link="/"
                  icon="history"
                  title={t`Revision history`}
                />
              </MenuSection>
            </Card>
          </AnimatedMenuWrapper>
        </PopoverWithTrigger>
      </Flex>
    </Flex>
    <Box ml="auto">
      <Button
        primary={mode !== "present"}
        onClick={() => setMode(mode === "present" ? "visualize" : "present")}
      >
        {mode === "present" ? "Edit" : "Present"}
      </Button>
    </Box>
  </Flex>
);

export default ViewHeader;
