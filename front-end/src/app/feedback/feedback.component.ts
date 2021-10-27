import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  _feedback!: Feedback;
  _rating!: Feedback;
  feedbacks!: Feedback[];
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe((feedbacks: any) => {
      this.feedbacks = feedbacks;
    });
  }

  sendFeedback() {
    var newFeedback = {
      feedback: this._feedback,
      rating: this._rating,
    };
    this.feedbackService.send(newFeedback).subscribe((data: any) => {
      this.feedbacks.push(data);
      this.feedbackService.getFeedback().subscribe((feedbacks: any) => {
        this.feedbacks = feedbacks;
      });
    });
  }
}
