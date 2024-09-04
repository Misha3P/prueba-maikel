import { Injectable } from '@angular/core';
import { activities } from '../data/database';
import { Activity } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  getAllActivities(): Activity[] {
    return activities;
  }

  getActivityById(activityId: string): Activity | undefined {
    return activities.find(activity => activity.ActivityId === activityId);
  }

  createActivity(activity: Activity): void {
    activities.push(activity);
  }

  updateActivity(activityId: string, updatedActivity: Partial<Activity>): void {
    const index = activities.findIndex(activity => activity.ActivityId === activityId);
    if (index !== -1) {
      activities[index] = { ...activities[index], ...updatedActivity };
    }
  }

  deleteActivity(activityId: string): void {
    const index = activities.findIndex(activity => activity.ActivityId === activityId);
    if (index !== -1) {
      activities.splice(index, 1);
    }
  }
}