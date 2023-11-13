import "./Message.scss";
import classNames from "classnames";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactAvatar from "~/components/ContactAvatar";
import MessageStatus from "~/components/MessageStatus";
import MessageTime from "~/components/MessageTime";
import type { IMessage } from "~/types/message";
import MessageContent from "../MessageContent";

interface MessageProps extends IMessage {
  original: boolean,
  prevDifferent: boolean,
  nextDifferent: boolean,
}

const Message = ({
  content,
  roomId,
  authorId,
  timestamp,
  status,
  original,
  prevDifferent,
  nextDifferent,
}: MessageProps) => (
  <Row>
    <Col
      xs={8}
      className={classNames("mb-1 d-flex", original ? "ms-auto flex-row-reverse" : "me-auto flex-row", {
        "pt-2": prevDifferent,
        "pb-2": nextDifferent,
      })}
    >
      <Card className="message" bg={!original ? "success" : undefined}>
        {!original && prevDifferent && authorId !== roomId &&
          <ContactAvatar
            size="2rem"
            id={authorId}
            className="message__author"
          />
        }
        <MessageTime timestamp={timestamp} className="message__time" />
        {original &&
          <div className="message__status">
            <MessageStatus current={status} />
          </div>
        }
        {prevDifferent &&
          <svg
            className={classNames("message__tail", `message__tail--${original ? "original" : "stranger"}`)}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="0,0 32,0 16,16" />
          </svg>
        }
        <Card.Body>
          <Card.Text className="message__content">
            <MessageContent content={content} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Message;
