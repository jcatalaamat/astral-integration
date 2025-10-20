#!/usr/bin/env python3
"""
Intelligent Notes Organizer
Categorizes and organizes notes into a structured folder hierarchy
"""

import os
import re
import shutil
from pathlib import Path
from collections import defaultdict

# Define folder structure
CATEGORIES = {
    'Personal & Reflections': {
        'Dreams & Visions': ['dream', 'dreamt', 'vision', 'border', 'dalai lama'],
        'Love & Relationships': ['love', 'morning love', 'nina moore', 'partner', 'relationship', 'alice', 'sacred union', 'wedding'],
        'Personal Growth': ['self integration', 'self honesty', 'breakthrough', 'overcome', 'heal myself', 'autistic', 'healthy'],
        'Daily Reflections': ['morning', 'wake up', 'bucket list', 'wish list', 'things i', 'what am i']
    },
    'Spiritual & Healing': {
        'Inner Ascend Community': ['inner ascend', 'membership', 'discord', 'community ai', 'mastermind'],
        'Ceremonies & Medicine Work': ['bufo', 'medicine', 'ceremony', 'ayahuasca', 'integration', 'sacred earth'],
        'Meditation & Practices': ['meditation', 'embodiment', 'practice', 'kundalini', 'light activation', 'yoga', 'shake'],
        'Healing Modalities': ['healing', 'therapy', 'somatic', 'family constellation', 'energy healing', 'clairvoyance', 'psychic'],
        'Spiritual Teachings': ['spiritual', 'catalyst', 'teaching', 'consciousness', 'awakening', 'divine', 'starseeds']
    },
    'Business & Projects': {
        'Inner Ascend Business': ['inner ascend overview', 'package options', 'coaching program', 'mentorship', 'mastermind'],
        'App & Platform Ideas': ['app', 'platform', 'mobile app', 'exchange', 'blockchain', 'nft', 'website'],
        'Coaching Programs': ['coaching', 'program', 'mentorship', 'workshop', 'training', 'group session'],
        'Community & Ecovillage Projects': ['ecovillage', 'community living', 'collective', 'land ownership', 'nomadic', 'yurt'],
        'Business Ideas & Strategy': ['business', 'offer', 'vision mission', 'founder', 'entrepreneur', 'incubator', 'marketing']
    },
    'Technical & Development': {
        'Code Snippets': ['using ', 'select ', 'httpswww.shazam', 'styled', 'token', '.domain.', 'public static'],
        'Software Projects': ['react', 'frontend', 'backend', 'database', 'db structure', 'sandbox', 'hostology'],
        'Technical Tasks': ['look for', 'need to get', 'fix', 'update', 'automatically', 'response not successful']
    },
    'Creative Content': {
        'AI Prompts & Experiments': ['you will now take', 'chatgpt', 'you are now', 'prompts library', 'ai designed', 'vision, an ai'],
        'Music & Songs': ['chord progression', 'song', 'singing', 'jaya ganesha', 'om asato', 'capo', 'meditation app'],
        'Writing & Storytelling': ['astral integration storytelling', 'write your', 'tales of', 'book', 'story', 'escribe'],
        'Marketing & Content': ['post about', 'communication', 'ig', 'instagram', 'content', 'video']
    },
    'Quick Captures': {
        'Links & References': ['https', 'http', 'www.', '.com/', 'docs.google', 'reddit.com'],
        'Todo Lists': ['lists of tasks', 'to do', 'tomorrow', 'need to', 'should', 'remember'],
        'Random Notes': []  # Catch-all for short, unclear notes
    }
}

def read_file_safely(filepath):
    """Read file content safely, handling encoding issues"""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            return f.read().lower()
    except:
        return ""

def categorize_note(filename, content):
    """Categorize a note based on filename and content"""
    filename_lower = filename.lower()
    content_lower = content.lower()[:2000]  # First 2000 chars for performance

    scores = defaultdict(lambda: defaultdict(int))

    # Score each category/subcategory
    for category, subcategories in CATEGORIES.items():
        for subcategory, keywords in subcategories.items():
            score = 0
            for keyword in keywords:
                # Filename matches are worth more
                if keyword in filename_lower:
                    score += 10
                # Content matches
                if keyword in content_lower:
                    score += content_lower.count(keyword)

            if score > 0:
                scores[category][subcategory] = score

    # Special cases for explicit content
    if any(word in filename_lower for word in ['xvideos', 'porn', 'xxx', 'anal', 'cock']):
        return ('Archive', 'Unclear or Incomplete Notes')

    # Special case for code
    if any(word in content_lower[:500] for word in ['using system', 'using hostology', 'public class', 'select ', 'from ', 'where ']):
        return ('Technical & Development', 'Code Snippets')

    # Find best match
    if scores:
        best_category = max(scores.items(), key=lambda x: sum(x[1].values()))
        category = best_category[0]
        best_subcategory = max(best_category[1].items(), key=lambda x: x[1])
        subcategory = best_subcategory[0]
        return (category, subcategory)

    # Default: check if it's very short or unclear
    if len(content.strip()) < 100 or not content.strip():
        return ('Quick Captures', 'Random Notes')

    # If still unclear, put in Personal & Reflections - Daily Reflections
    return ('Personal & Reflections', 'Daily Reflections')

def create_folder_structure(base_path):
    """Create the organized folder structure"""
    for category, subcategories in CATEGORIES.items():
        for subcategory in subcategories.keys():
            folder_path = base_path / "Organized Notes" / category / subcategory
            folder_path.mkdir(parents=True, exist_ok=True)

    # Create Archive folder
    archive_path = base_path / "Organized Notes" / "Archive" / "Unclear or Incomplete Notes"
    archive_path.mkdir(parents=True, exist_ok=True)

def organize_notes(base_path):
    """Main function to organize all notes"""
    base_path = Path(base_path)

    # Create folder structure
    print("Creating folder structure...")
    create_folder_structure(base_path)

    # Get all txt files
    txt_files = list(base_path.glob("*.txt"))
    print(f"\nFound {len(txt_files)} text files to organize\n")

    # Track organization
    organization_report = defaultdict(list)

    # Process each file
    for i, filepath in enumerate(txt_files, 1):
        filename = filepath.name
        print(f"Processing [{i}/{len(txt_files)}]: {filename[:60]}...")

        # Read content
        content = read_file_safely(filepath)

        # Categorize
        category, subcategory = categorize_note(filename, content)

        # Determine destination
        dest_folder = base_path / "Organized Notes" / category / subcategory
        dest_path = dest_folder / filename

        # Handle name conflicts
        counter = 1
        while dest_path.exists():
            name_parts = filename.rsplit('.', 1)
            if len(name_parts) == 2:
                dest_path = dest_folder / f"{name_parts[0]} ({counter}).{name_parts[1]}"
            else:
                dest_path = dest_folder / f"{filename} ({counter})"
            counter += 1

        # Copy file (not move, to be safe)
        try:
            shutil.copy2(filepath, dest_path)
            organization_report[f"{category}/{subcategory}"].append(filename)
        except Exception as e:
            print(f"  ERROR: Could not copy {filename}: {e}")
            organization_report["ERRORS"].append(filename)

    return organization_report

def generate_report(organization_report, base_path):
    """Generate a markdown report of the organization"""
    report_path = Path(base_path) / "Organization_Report.md"

    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("# Notes Organization Report\n\n")
        f.write(f"**Total files organized:** {sum(len(files) for cat, files in organization_report.items() if cat != 'ERRORS')}\n\n")

        if "ERRORS" in organization_report:
            f.write(f"**Errors encountered:** {len(organization_report['ERRORS'])}\n\n")

        f.write("## Organization Summary\n\n")

        # Sort by category
        sorted_cats = sorted([cat for cat in organization_report.keys() if cat != "ERRORS"])

        for category in sorted_cats:
            files = organization_report[category]
            f.write(f"### {category} ({len(files)} files)\n\n")

            # Show first 10 files as examples
            for filename in sorted(files)[:10]:
                f.write(f"- {filename}\n")

            if len(files) > 10:
                f.write(f"- ... and {len(files) - 10} more\n")

            f.write("\n")

        if "ERRORS" in organization_report:
            f.write("## Errors\n\n")
            for filename in organization_report["ERRORS"]:
                f.write(f"- {filename}\n")

    print(f"\n✅ Organization report saved to: {report_path}")
    return report_path

if __name__ == "__main__":
    base_path = Path(__file__).parent

    print("=" * 70)
    print("INTELLIGENT NOTES ORGANIZER")
    print("=" * 70)
    print()

    # Organize notes
    organization_report = organize_notes(base_path)

    # Generate report
    report_path = generate_report(organization_report, base_path)

    print("\n" + "=" * 70)
    print("✅ ORGANIZATION COMPLETE!")
    print("=" * 70)
    print(f"\nYour notes have been organized into: {base_path / 'Organized Notes'}")
    print(f"Original files remain untouched in: {base_path}")
    print(f"\nReview the organization report: {report_path}")
    print("\nIf you're happy with the organization, you can delete the original flat files.")
    print("=" * 70)
